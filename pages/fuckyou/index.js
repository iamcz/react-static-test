import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import styles from './styles.scss';

class FuckYou extends React.Component {

  componentDidMount() {
    document.title = 'fuck you';
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 className={styles.h1}>Fuck You</h1>
        </div>
      </Layout>
    );
  }

}

export default FuckYou;
