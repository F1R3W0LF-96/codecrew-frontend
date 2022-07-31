import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "./VideoBlog.css"
function VideoBlog() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Video Blog</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=N8CMKC-IYPo&t=2s' />
                    <p>
                        If you are still inside the vi editor, 
                        you might be in a different mode from the one you want.
                         Hit ESC a couple of times (until it rings or flashes) and then "i" 
                         to enter INSERT mode or "a" to enter APPEND mode (they are the same, just 
                         start before or after current character).

                        If you are back at the command prompt, make sure you can 
                        locate the file, then navigate to that directory and perform the mentioned 
                        "vi helloWorld.txt". Once you are in the editor, you'll need to check the vi 
                        reference to know how to perform the editions you want (you may want to google 
                        "vi reference" or "vi cheat sheet").

                        Once the edition is done, hit ESC again, then type :wq to save your work or :q!
                         to quit without saving.

                        For quick reference, <a href='http://www.lagmonster.org/docs/vi.html'>here</a> you have a text-based cheat sheet.
                    </p>

                </Row>
            </Container>
        </div>
    )
}

export default VideoBlog