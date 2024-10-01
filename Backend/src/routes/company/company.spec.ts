// import request from 'supertest';
// import { Company } from '../../models/company.model';
// import app from '../../app';

// jest.mock('../../models/company.model');

 

// describe('Company Controller', () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     describe('POST /register', () => {
//         it('should return 400 if companyName is missing', async () => {
//             const response = await request(app)
//                 .post('/register')
//                 .send({});

//             expect(response.status).toBe(400);
//             expect(response.body.message).toBe("Company name is required.");
//         });

//         it('should return 400 if company already exists', async () => {
//             (Company.findOne as jest.Mock).mockResolvedValueOnce(true); // Simulate existing company

//             const response = await request(app)
//                 .post('/register')
//                 .send({ companyName: 'Existing Company' });

//             expect(response.status).toBe(400);
//             expect(response.body.message).toBe("You can't register same company.");
//         });

//         it('should register a company successfully', async () => {
//             (Company.findOne as jest.Mock).mockResolvedValueOnce(null); // No existing company
//             (Company.create as jest.Mock).mockResolvedValueOnce({ name: 'New Company' });

//             const response = await request(app)
//                 .post('/register')
//                 .send({ companyName: 'New Company' });

//             expect(response.status).toBe(201);
//             expect(response.body.message).toBe("Company registered successfully.");
//             expect(response.body.company.name).toBe('New Company');
//         });
//     });

//     describe('GET /companies', () => {
//         it('should return 200 and a list of companies', async () => {
//             const mockCompanies = [{ name: 'Company A' }, { name: 'Company B' }];
//             (Company.find as jest.Mock).mockResolvedValueOnce(mockCompanies);
//             const req = { id: 'userId' }; // Mock request object

//             const response = await request(app)
//                 .get('/companies')
//                 .set('Authorization', 'Bearer token') // Mock authorization token
//                 .send(req);

//             expect(response.status).toBe(200);
//             expect(response.body.companies).toEqual(mockCompanies);
//         });

//         it('should return 404 if no companies are found', async () => {
//             (Company.find as jest.Mock).mockResolvedValueOnce([]);

//             const response = await request(app)
//                 .get('/companies')
//                 .send();

//             expect(response.status).toBe(404);
//             expect(response.body.message).toBe("Companies not found.");
//         });
//     });

//     describe('GET /companies/:id', () => {
//         it('should return 200 and the company if found', async () => {
//             const mockCompany = { name: 'Company A' };
//             (Company.findById as jest.Mock).mockResolvedValueOnce(mockCompany);

//             const response = await request(app)
//                 .get('/companies/123')
//                 .send();

//             expect(response.status).toBe(200);
//             expect(response.body.company).toEqual(mockCompany);
//         });

//         it('should return 404 if company not found', async () => {
//             (Company.findById as jest.Mock).mockResolvedValueOnce(null);

//             const response = await request(app)
//                 .get('/companies/123')
//                 .send();

//             expect(response.status).toBe(404);
//             expect(response.body.message).toBe("Company not found.");
//         });
//     });

//     describe('PUT /companies/:id', () => {
//         it('should update the company successfully', async () => {
//             const mockCompany = { name: 'Updated Company' };
//             (Company.findByIdAndUpdate as jest.Mock).mockResolvedValueOnce(mockCompany);

//             const response = await request(app)
//                 .put('/companies/123')
//                 .send({
//                     name: 'Updated Company',
//                     description: 'New Description',
//                     website: 'http://example.com',
//                     location: 'New Location'
//                 });

//             expect(response.status).toBe(200);
//             expect(response.body.message).toBe("Company information updated.");
//         });

//         it('should return 404 if company not found for update', async () => {
//             (Company.findByIdAndUpdate as jest.Mock).mockResolvedValueOnce(null);

//             const response = await request(app)
//                 .put('/companies/123')
//                 .send({ name: 'Nonexistent Company' });

//             expect(response.status).toBe(404);
//             expect(response.body.message).toBe("Company not found.");
//         });
//     });
// });