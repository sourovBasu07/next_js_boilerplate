export default function RootLayout({
    children,
    account,
    notification,
    privacy
}) {
    return (
        <div className="">
            {children}
            <div className="">
                {account}
                {privacy}
                {notification}
            </div>
        </div>
    );
}