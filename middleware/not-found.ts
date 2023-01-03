const notFound = (req:any, res:any) => res.status(404).send('Requested route does not exist');

export default notFound;