import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from "@/layout/RootLayout.tsx";
import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from "@/pages/NotFound.tsx";
import Blog from "@/pages/Blog.tsx";
import CodeOfConduct from "@/pages/CodeOfConduct.tsx";
import Contact from "@/pages/Contact.tsx";
import Docs from "@/pages/Docs.tsx";
import Download from "@/pages/Download.tsx";
import Features from "@/pages/Features.tsx";
import License from "@/pages/License.tsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy.tsx";
import Roadmap from "@/pages/Roadmap.tsx";
import Showcase from "@/pages/Showcase.tsx";

function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<RootLayout />}>
              <Route index element={<Home />}/>
              <Route path='about' element={<About />}/>
              <Route path='blog' element={<Blog />}/>
              <Route path='code-of-conduct' element={<CodeOfConduct />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='docs' element={<Docs />}/>
              <Route path='download' element={<Download />}/>
              <Route path='features' element={<Features />}/>
              <Route path='license' element={<License />}/>
              <Route path='privacy-policy' element={<PrivacyPolicy />}/>
              <Route path='roadmap' element={<Roadmap />}/>
              <Route path='showcase' element={<Showcase />}/>
              <Route path='*' element={<NotFound />}/>
          </Route>
      )
  )

  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App