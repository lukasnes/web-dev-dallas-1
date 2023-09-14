export default function LogoutButton({ onLogout }) {
  return (
    <form onSubmit={onLogout}>
      <button type="submit">Log Out</button>
    </form>
  );
}
