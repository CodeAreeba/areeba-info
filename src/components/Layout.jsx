import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans selection:bg-[#00D1B2]/30">
      {/* Background Decorative Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D1B2]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
