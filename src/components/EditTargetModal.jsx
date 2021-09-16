import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Details.css';

const EditTargetModal = ({listing, isVisible, handleModalClick, updateEntry}) => {
    const [formData, setFormData] = useState({});

    useEffect(()=> {
        if (!!listing) {
            setFormData({
                companyName: listing.company_info.name,
                companyDomain: listing.company_info.url,
                sector: listing.company_info.sector,
                description: listing.company_info.description,
                streetNumber: listing.company_info.geo.streetNumber,
                streetName: listing.company_info.geo.streetName,
                city: listing.company_info.geo.city,
                stateCode: listing.company_info.geo.stateCode,
                employees: listing.metrics.employees,
                marketCap: listing.metrics.marketCap,
                annualRevenue: listing.metrics.annualRevenue,
                status: listing.status
            });
        }
    },[listing])
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEntry(listing.id, formData.status);
        handleModalClick();
    };

    return (
        <>
            <Button 
                type="button" 
                id="backButton" 
                variant="primary"
                onClick={handleModalClick}>Edit</Button>
            <Modal 
                show={isVisible} 
                onHide={handleModalClick} 
                keyboard={false}
                centered
            >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Target Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="companyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter the company name"
                                    value={formData.companyName}
                                    onChange={(e)=>handleChange(e)} 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="companyDomain">
                                <Form.Label>Domain</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter a url to lookup" 
                                    value={formData.companyDomain}
                                    onChange={(e)=>handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="sector">
                                <Form.Label>Sector</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter the sector" 
                                    value={formData.sector}
                                    onChange={(e)=>handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label>Status</Form.Label>
                                <select 
                                    id="status"
                                    className="form-control"
                                    defaultValue={formData.status}
                                >
                                    <option value='researching'>Researching</option>
                                    <option value='pending'>Pending</option>
                                    <option value='approved'>Approved</option>
                                    <option value='declined'>Declined</option>
                                </select>
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

export default EditTargetModal;