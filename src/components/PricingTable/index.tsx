import styles from './pricing-table.module.scss'
import { CgCheck } from "@react-icons/all-files/cg/CgCheck";

export function PricingTable() {
  return (
    <div className={styles.pricingTable}>
      <div className={styles.pricingItem}>
        <span />
        <h2>Base</h2>
        <p><small>Get your smooth and custom website with our core features.</small></p>
        <span>129</span>
        <span>169</span>
        <button>
          <a href="/">Get Started</a>
        </button>
        <ul>
          <li><CgCheck />Custom website</li>
          <li><CgCheck />Blog ready</li>
          <li><CgCheck />Brand style guide</li>
          <li><CgCheck />SEO optimization </li>
          <li><CgCheck />Security</li>
          <li><CgCheck />Hosting included</li>
          <li><CgCheck />Software updates</li>
          <li><CgCheck />Integrations</li>
          <li><CgCheck />HIPAA compliance</li>
          <li><CgCheck />Weekly Backups</li>
          <li><CgCheck />Premium plugins</li>
          <li><CgCheck />14-day money back guarantee</li>
          <li><CgCheck />Cancel anytime</li>
          <li><CgCheck />Basic support</li>
        </ul>
      </div>
      <div className={styles.pricingItem}>
        <span>recomended</span>
        <h2>Unlimited</h2>
        <p><small>Improve, add and update new content constantly.</small></p>
        <span>269</span>
        <span>339</span>
        <button>
          <a href="/">Get Started</a>
        </button>
        <span>Everything on Base +</span>
        <ul>
          <li>Unlimited tasks</li>
          <li>Unlimited revisions</li>
          <li>1 active task at a time</li>
          <li>Priority support</li>
        </ul>
      </div>
      <div className={styles.pricingItem}>
        <span />
        <h2>Premier</h2>
        <p><small>For those who needs processing high volumes of updates quickly.</small></p>
        <span>399</span>
        <span>499</span>
        <button>
          <a href="/">Get Started</a>
        </button>
        <span>Everything on Unlimited +</span>
        <ul>
          <li>Concurrent tasks</li>
          <li>Unlimited A/B</li>
        </ul>
      </div>
    </div>
  );
}