import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { capitalize } from '../utilities';
import env from 'react-dotenv';

const AddTargetModal = ({isVisible, handleModalClick, addEntry }) => {
    const [companyName, setCompanyName] = useState('');
    const [companyDomain, setCompanyDomain] = useState('');
    // const [validated, setValidated] = useState(false);

    const fetchBigPicture = async (domain) => {
        const url = `https://company.bigpicture.io/v1/companies/find?domain=${domain}`;
        const key = env.API_KEY;
        const requestOptions = {
            headers: {'Authorization': key}    
        };
        const response = await fetch(url, requestOptions)
            .then(response => response.json())
        return response;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = capitalize(companyName);
        //validate domain name
        const response = await fetchBigPicture(companyDomain);
        if (!!response.geo) {
            addEntry(name, companyDomain, response)
        } else {
            addEntry(name, companyDomain, null);
        }
        handleModalClick();
    };

    const handleChange = (e) => {
        if (e.target.id === 'companyName') {
            setCompanyName(e.target.value)
        }; 
        if (e.target.id === 'companyDomain') {
            setCompanyDomain(e.target.value)
        };
    };


    return (
        <>
            <Button 
                id="addButton" 
                variant="primary"
                onClick={handleModalClick}
            >
                Add Target
            </Button>
            <Modal 
                show={isVisible} 
                onHide={handleModalClick} 
                keyboard={false}
                centered
            >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="companyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter the company name"
                                    value={companyName}
                                    onChange={(e)=>handleChange(e)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="companyDomain">
                                <Form.Label>Domain</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter a url to lookup" 
                                    value={companyDomain}
                                    onChange={(e)=>handleChange(e)}/>
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
            </Modal>
        </> 
    )
};

export default AddTargetModal;