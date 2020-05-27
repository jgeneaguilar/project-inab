import React from 'react';
import { Layout, PageHeader, Button } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header className="homeLayoutHeader">
        <PageHeader className="homePageHeader">
          <div className="branding">
            <h2>INAB.</h2>
          </div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </PageHeader>
      </Header>
      <Content>Some content for later use</Content>
    </Layout>
  );
};

export default HomePage;
