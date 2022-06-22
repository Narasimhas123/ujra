import "./Navbar.css";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Ujra Logo</div>
      <div className="navbar-btns">
        <div className="insure-div">
          <button className="insure">Insure Empolyees</button>
        </div>
        <div className="policy-div">
          <button className="policy">Know Your Policy</button>
          <LockOutlinedIcon className="lock1" />
        </div>
        <div className="loan-div">
          <button className="loan">Instant Loan</button>
          <LockOutlinedIcon className="lock2" />
        </div>
        <div className="claim-div">
          <button className="claim">Submit Claim</button>
          <LockOutlinedIcon className="lock3" />
        </div>
      </div>
      <div className="login">
        <HeadsetMicOutlinedIcon className="headeset" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
