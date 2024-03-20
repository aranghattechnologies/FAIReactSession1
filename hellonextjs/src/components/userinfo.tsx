export default function UserInfo({name, email}: {name: string, email: string}) {
    return (
        <div>
            <h1>User Info</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}