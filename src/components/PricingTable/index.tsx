import styles from './pricing-table.module.scss'

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
          <li>Custom website</li>
          <li>Blog ready</li>
          <li>Brand style guide</li>
          <li>SEO optimization </li>
          <li>Security</li>
          <li>Hosting included</li>
          <li>Software updates</li>
          <li>Integrations</li>
          <li>HIPAA compliance</li>
          <li>Weekly Backups</li>
          <li>Premium plugins</li>
          <li>14-day money back guarantee</li>
          <li>Cancel anytime</li>
          <li>Basic support</li>
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