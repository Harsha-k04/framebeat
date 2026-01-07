import { Resend } from "resend"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

const resend = new Resend(process.env.RESEND_API_KEY)

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { name, email, message } = req.body

    try {
        // 1️⃣ Save to Firestore
        await addDoc(collection(db, "contacts"), {
            name,
            email,
            message,
            createdAt: serverTimestamp(),
        })

        // 2️⃣ Send email
        await resend.emails.send({
            from: "Framebeat <noreply@framebeat.in>",
            to: process.env.CONTACT_RECEIVER_EMAIL,
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        })

        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" })
    }
}
