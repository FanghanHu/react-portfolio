import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return (
            <div className="container p-5 mh-100">
                <main>
                    <h1 className="mt-5">About me</h1>
                    <hr />
                    <img className='img-thumbnail float-left m-3' src="./assets/img/picture.jpg" width="175" alt="Handsome me" />
                    <p className="text-lg">
                        Hi, my name is Fanghan Hu, but my friends call me Rex, I am a developer, I develop applications on the web, on PC, and on mobile platforms as well. so far, I've had experience with Java, C#, Android, Javascript, HTML, CSS, Node.js, Express, and Pug.
                    </p>
                    <p className="text-muted my-5 merriweather">
                        My favorite concept of computer science is automation, and I love minimalist user interfaces. Simple design does not equal effortlessness. On the contrary, Simple design can often mean there are more thought behind each element. And that is how I code my applications.
                    </p>
                    <p className="text-lg">
                        In this portfolio, you will find some examples of my past projects. I am actively looking for peers and job opportunity, please contact me on GitHub or leave me a message if you are interested in my work
                    </p>
                    <div className="text-center mt-5">
                        <h4>My Resume: </h4>
                        <a href="https://drive.google.com/file/d/1QEzMfNjmel-hkqn5ywbdqXXeOhU-uaMS/view?usp=sharing"><FontAwesomeIcon style={{fontSize: "6rem"}} icon={faFile} /></a>
                        <p className="text-muted" style={{marginLeft: -1.5 + 'rem' }}>Fanghan Hu.pdf</p>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;