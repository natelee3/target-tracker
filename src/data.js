//data object mocks up basic company data

export const data =

[
    {
        "id": 0,
        "status": "researching",
        "key_contacts" : [
            "", ""
        ],
        "company_info": {
            "name": "Uber Technologies",
            "url" : "https://www.uber.com",
            "logo": "http://logo.bigpicture.io/logo/uber.com",
            "sector": "Technology",
            "description": "Uber Technologies, Inc. develops and operates proprietary technology applications in the United States, Canada, Latin America, Europe, the Middle East, Africa, and the Asia Pacific. It connects consumers with independent providers of ride services for ridesharing services and other forms of transportation services, including public transit, as well as connect riders and other consumers with restaurants, grocers, other stores, and delivery service providers for meal preparation, grocery, and other delivery services...",
            "geo": {
                "city": "San Francisco",
                "stateCode": "CA",
                "streetNumber": "1515",
                "streetName": "3rd Street"
            }
        },  
        "metrics": {
            "employees": 22200,
            "marketCap": 86561472512,
            "annualRevenue": 10794000384
        }
    },
    {
        "id": 1,
        "status": "pending",
        "key_contacts" : [
            "", ""
        ],
        "company_info": {
            "name": "Target",
            "url" : "https://www.target.com",
            "logo": "http://logo.bigpicture.io/logo/target.com",
            "sector": "Retail",
            "description": "Uber Technologies, Inc. develops and operates proprietary technology applications in the United States, Canada, Latin America, Europe, the Middle East, Africa, and the Asia Pacific. It connects consumers with independent providers of ride services for ridesharing services and other forms of transportation services, including public transit, as well as connect riders and other consumers with restaurants, grocers, other stores, and delivery service providers for meal preparation, grocery, and other delivery services...",
            "geo": {
                "city": "Minneapolis",
                "stateCode": "MN",
                "streetNumber": "1000",
                "streetName": "Nicollet Mall"
            }
        },  
        "metrics": {
            "employees": 409000,
            "marketCap": 124058624000,
            "annualRevenue": 98143002624
        }
    },
];

//Mock up of note table: id (references companies.id), content, timestamp
export const notes = [

]

