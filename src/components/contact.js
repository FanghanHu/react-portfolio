import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
    render() {
        return (
            <div class="container mb-5">
                <main class="p-5">
                    <h2>Contact me:</h2>
                    <hr />
                    <ul class="h5" style={{lineHeight: "2rem"}}>
                        <li><label>Email: </label> Fanghan.Hu@gmail.com</li>
                        <li><label>Cell Phone: </label> 832-748-8444</li>
                        <li><a class="btn btn-success m-1" href="https://www.linkedin.com/in/fanghan-hu" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /> | Linkedin </a></li>
                        <li><a class="btn btn-primary m-1" href="https://github.com/FanghanHu" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /> | Github </a></li>
                    </ul>

                    <h2 class="mt-5">Leave a message:</h2>
                    <hr />
                    <form>
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name here..." />
                        </div>
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email here..." />
                        </div>
                        <div class="form-group">
                            <label class="form-check-label" for="message">Message: </label>
                            <textarea class="form-control" id="message" rows="5" placeholder="leave a message here..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary float-right">Submit</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default Contact;