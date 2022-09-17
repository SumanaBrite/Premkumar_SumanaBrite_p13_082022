import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import accounts from '../../datas/account'
import Account from '../../components/Account/Account'
import UserHeader from '../../components/UserHeader/UserHeader'

export default function User() {
  return (
    <>

      <Navigation />
      <main className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
          <Account key={account.title} title={account.title} amount={account.amount} description={account.description} />
        ))}
      </main>
      <Footer />

    </>
  )

}