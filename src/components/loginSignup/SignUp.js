import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SignUp({ setExistingUser }) {

    return (
        <>
            <Modal show={true} onHide={() => setExistingUser(true)}>
                <Modal.Header closeButton>
                    <Modal.Title>Register Now</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" placeholder="City" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" placeholder="State" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder="Zip" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" id="country" placeholder="Country" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" id="birthday" placeholder="Birthday" />
                        </div>
                        <div className="form-group">
                            <label htmlFor=""></label>
                            <input type="checkbox" />
                            I agree to the terms and conditions
                        </div>
                        </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setExistingUser(true)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setExistingUser(true)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignUp