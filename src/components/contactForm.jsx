const ContactForm = () => {
  return (
    <div>
        <div>
            <div>
                <span>ICON</span>
                <p>Vancouver Canada</p>
                <p>British Columbia</p>
            </div>

            <div>
                <span>ICON</span>
                <p>+233 500 000 022</p>
                <p>Mon to Fri 9am to 6 pm</p>
            </div>

            <div>
                <span>ICON</span>
                <p>support@ite.com</p>
                <p>Send us your query anytime!</p>
            </div>
        </div>

        <form action="">
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>

            <div>
                <textarea name="" id=""></textarea>
            </div>
        </form>
        <button>Send Message</button>
    </div>
  )
};

export default ContactForm;