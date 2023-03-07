import { PhotoProvider } from 'react-photo-view';
import { router } from './Route/Routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App vendorListHeading scroll-smooth">
        <PhotoProvider>
          <RouterProvider router={router} />
        </PhotoProvider>
    </div>
  );
}

export default App;
