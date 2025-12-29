const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { Resend } = require("resend")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." })
  }

  try {
    await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>", // Use their dev domain for now
      to: process.env.EMAIL_RECEIVER,
      subject: `You've got a message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    res.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    res.status(500).json({ success: false, error: "Failed to send message" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
