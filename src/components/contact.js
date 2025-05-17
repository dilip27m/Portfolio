"use client"

export default function Contact(){
    return (
        <div className="bg-white/3 backdrop-blur-md px-8 py-10 max-w-6xl mx-auto rounded-3xl border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold mb-4  text-white">Contact Me</h2>
            <form
            action="https://formsubmit.co/dilipkumarreddym2005@gmail.com"
            method="POST"
            className="space-y-4"
            >
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thanks for contacting! I'll get back to you soon." />
            <div>
               
                <input 
                type="email"
                name="email"
                placeholder="Email"
                required 
                className="mt-1 block w-full px-4 py-2 rounded-3xl border border-white/20 shadow-sm focus:ring-blue-400 focus:border-blue-500"/>

            </div>
            <div>
                
                <textarea
                name="message"
                placeholder="Your message"
                required 
                rows={4}
                className="mt-1 px-4 py-3 block w-full rounded-3xl border border-white/20 shadow-sm hover:ring-blue-400 focus:ring-blue-400 focus:border-blue-400"/>

            </div>
            <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-3xl">Send</button>
            </form>
        </div>
    );
}