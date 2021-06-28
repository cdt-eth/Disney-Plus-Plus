import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="/" className="footerLogo">
        <img src="/dpp.png" alt="logo" />
      </a>
      <ul className="footerList">
        <li className="footerItem">
          <a href="https://www.disneyplus.com/legal/privacy-policy">
            Privacy Policy
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.disneyplus.com/legal/subscriber-agreement">
            Subscriber Agreement
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.disneyplus.com/legal/your-california-privacy-rights">
            Your California Privacy Rights
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.disneyplus.com/legal/do-not-sell-my-info">
            Do Not Sell My Info
          </a>
        </li>
        <li className="footerItem">
          <a href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/">
            Children's Online Privacy Policy
          </a>
        </li>
        <li className="footerItem">
          <a href="https://help.disneyplus.com/csp">Help</a>
        </li>
        <li className="footerItem">
          <a href="https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982">
            Closed Captioning
          </a>
        </li>
        <li className="footerItem">
          <a href="https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982">
            Supported Devices
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.disneyplus.com/welcome/gift-subscription">
            Gift Disney+
          </a>
        </li>
        <li className="footerItem">
          <a href="https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed">
            About Us
          </a>
        </li>
        <li className="footerItem">
          <a href="https://www.disneyplus.com/welcome/partner-program">
            Disney+ Partner Program
          </a>
        </li>
        <li className="footerItem">
          <a href="https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus">
            Interest-based Ads
          </a>
        </li>
      </ul>
      <p className="copyright">© Disney. All Rights Reserved.</p>
    </div>
  );
}
