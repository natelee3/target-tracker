import ReactImageFallback from 'react-image-fallback';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Modal } from 'react-bootstrap';


const SingleResult = (props) => {
    const { id, status, company_info } = props.listing;
    const { name, url, logo } = company_info;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const deleteAndClose = () => {
        props.delete(id);
        handleClose();
    };
    
    return (
        <>
            <Modal show={show} onHide={handleClose} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Target</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Are you sure you want to delete this target?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={deleteAndClose}>Delete</Button>
                </Modal.Footer>
            </Modal>

            <Card key={id} style={{ width: '90vw' }}>
                <div className="row justify-content-center">
                    <Col xs={3} className="d-flex align-self-center justify-content-center">
                        <div className="img-wrapper d-block">
                            <ReactImageFallback
                                            src={logo} 
                                            fallbackImage="/logo192.png"
                                            className="card-img" 
                            />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <Card.Body className="align-left">
                            <Card.Title>
                                <a href={url} target='_blank' rel="noreferrer">
                                    <b>{name}</b>
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Status: {status}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={4} className="d-flex align-self-center justify-content-center">
                        <Link to={`/${id}`}>
                                <Button variant="primary">Details</Button>
                        </Link>
                        <Button variant="danger" onClick={()=> handleOpen()}>Delete</Button>
                    </Col>
                </div>    
            </Card>
        </>
    )
};   

export default SingleResult;

