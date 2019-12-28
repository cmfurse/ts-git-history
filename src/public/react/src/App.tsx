import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// tslint:disable-next-line:interface-name
interface Commit { node: any; }

// tslint:disable-next-line:variable-name
const App: React.FC = () => {

  const [commits, setCommits] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/history');
      setCommits(result.data);
    };
    fetchData();
  }, []);

  const renderCommits = () => {
    return commits.map((c: Commit, idx) => {
      return (
        <tr key={idx}>
          <td>{c.node.committedDate}</td>
          <td>{c.node.message}</td>
          <td>{c.node.author.name}</td>
          <td>{c.node.author.email}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Navigation />
      <Container>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Date</th>
          <th>Message</th>
          <th>Author</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
          {renderCommits()}
        </tbody>
      </Table>
      </Container>
    </div>
  );
};

export default App;
