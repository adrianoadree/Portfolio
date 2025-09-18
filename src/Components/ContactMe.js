import { useState } from "react";

const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=adrianoadriannn@gmail.com&su=Message from ${encodeURIComponent(
            formData.name
        )}&body=${encodeURIComponent(
            `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;

        window.open(gmailURL, "_blank");
    };



    return (
        <div
            className="row text-center fontRaleway p-5"
            style={{
                height: "auto",
                backgroundColor: "#0F0E0E",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Left side - Title */}
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
                <h1
                    className="fontTitle px-5"
                    style={{ fontSize: "8em", color: "#948979", lineHeight: "1.1" }}
                >
                    Shoot a Message
                </h1>
            </div>

            {/* Right side - Form */}
            <div className="col-lg-8 d-flex justify-content-center">
                <form
                    onSubmit={handleSubmit}
                    style={{
                        width: "80%",
                        maxWidth: "90vw",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Name */}
                    <div style={{ position: "relative", marginBottom: "2em" }}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "1.2em 0.75em 0.5em",
                                border: formData.name ? "2px solid #948979" : "none",
                                borderBottom: "2px solid #948979",
                                background: "transparent",
                                color: "#fff",
                                fontSize: "1.2em",
                                outline: "none",
                                transition: "all 0.3s ease",
                            }}
                            onFocus={(e) => (e.target.style.border = "2px solid #948979")}
                            onBlur={(e) =>
                            (e.target.style.border = formData.name
                                ? "2px solid #948979"
                                : "none")
                            }
                        />
                        <label
                            style={{
                                position: "absolute",
                                left: "0.75em",
                                top: formData.name ? "-1.2em" : "1.2em",
                                fontSize: formData.name ? "1em" : "1.2em",
                                fontWeight: "600",
                                color: formData.name ? "#948979" : "#aaa",
                                transition: "all 0.3s ease",
                                pointerEvents: "none",
                                backgroundColor: "#0F0E0E",
                                padding: "0 0.25em",
                            }}
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email */}
                    <div style={{ position: "relative", marginBottom: "2em" }}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "1.2em 0.75em 0.5em",
                                border: formData.email ? "2px solid #948979" : "none",
                                borderBottom: "2px solid #948979",
                                background: "transparent",
                                color: "#fff",
                                fontSize: "1.2em",
                                outline: "none",
                                transition: "all 0.3s ease",
                            }}
                            onFocus={(e) => (e.target.style.border = "2px solid #948979")}
                            onBlur={(e) =>
                            (e.target.style.border = formData.email
                                ? "2px solid #948979"
                                : "none")
                            }
                        />
                        <label
                            style={{
                                position: "absolute",
                                left: "0.75em",
                                top: formData.email ? "-1.2em" : "1.2em",
                                fontSize: formData.email ? "1em" : "1.2em",
                                fontWeight: "600",
                                color: formData.email ? "#948979" : "#aaa",
                                transition: "all 0.3s ease",
                                pointerEvents: "none",
                                backgroundColor: "#0F0E0E",
                                padding: "0 0.25em",
                            }}
                        >
                            Your Email
                        </label>
                    </div>

                    {/* Message */}
                    <div style={{ position: "relative", marginBottom: "2em" }}>
                        <textarea
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "1.2em 0.75em 0.5em",
                                border: formData.message ? "2px solid #948979" : "none",
                                borderBottom: "2px solid #948979",
                                background: "transparent",
                                color: "#fff",
                                fontSize: "1.2em",
                                outline: "none",
                                transition: "all 0.3s ease",
                                resize: "none",
                            }}
                            onFocus={(e) => (e.target.style.border = "2px solid #948979")}
                            onBlur={(e) =>
                            (e.target.style.border = formData.message
                                ? "2px solid #948979"
                                : "none")
                            }
                        />
                        <label
                            style={{
                                position: "absolute",
                                left: "0.75em",
                                top: formData.message ? "-1.2em" : "1.2em",
                                fontSize: formData.message ? "1em" : "1.2em",
                                fontWeight: "600",
                                color: formData.message ? "#948979" : "#aaa",
                                transition: "all 0.3s ease",
                                pointerEvents: "none",
                                backgroundColor: "#0F0E0E",
                                padding: "0 0.25em",
                            }}
                        >
                            Your Message
                        </label>
                    </div>

                    {/* Button */}
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ContactMe;
