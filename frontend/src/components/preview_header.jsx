const PreviewHeader = () => {
  return (
    <header style={{ backgroundColor: "black", color: "white" , padding: "8px 16px" , display: "flex" , justifyContent: "space-between" , alignItems: "center"}}>
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/evanto.svg"
          alt="Logo"
          style={{ backgroundColor: "black", color: "white" ,padding: "8px 16px", padding: "0 24px"}}
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center">
        <button style={{ backgroundColor: "rgb(130, 180, 64)", color: "white", padding: "8px 16px", borderRadius: "4px" }}>
          <a href="#" style={{ textDecoration: "none", color: "white" }}>Buy Now</a>
        </button>
      </nav>
      
    </header>
  );
};

export default PreviewHeader;