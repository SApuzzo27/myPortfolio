import React from "react";


export default class MyForm extends React.Component {
    constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
    status: ""
    };
    }

render() {
    const { status } = this.state;
    return (
        <form className="MyForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xdopjoor"
        method="POST"
        >
        { /* <!-- add your custom form HTML here --> */ }
        <section className="container-fluid">
        <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- contact me -</h3>
                </div>
            </div>
            <hr/>
        <div className="formContent">
        <label>Name:</label>
        <br></br>
        <input type="text" name="name" placeholder="Name" /> <br></br>
        <label>Email:</label>
        <br></br>
        <input type="email" name="email" placeholder="Email" /> <br></br>
        <label>Phone Number:</label> <br></br>
        <input type="text" name="phone" placeholder="Phone Number"/> <br></br>
        <label>Message:</label>  <br></br>
        <textarea type="text" name="message"  id="messageInput" placeholder="You Can Say Something Here"/>
        <br></br>

        {status === "SUCCESS" ? <p>Thanks - your message has been submited!</p> : <button className="sendbutton">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
        </section>
        </form>

    );
}

    submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        } else {
        this.setState({ status: "ERROR" });
        }
    };
    xhr.send(data);
    }
}

