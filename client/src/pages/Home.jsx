import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';


import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';


const Home = () => {
 


  return (
    <main>
      <p>HEY LET'S PUT SOME CONTENT HERE!!! tweak</p>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <ThoughtForm /> */}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/*INSERT JOB LIST HERE */}
        </div>
      </div>
    </main>
  );
};

export default Home;
