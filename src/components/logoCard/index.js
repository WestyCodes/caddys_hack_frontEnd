export default function LogoCard() {
    return (
        <div className="text-center pt-5">
            <img
                className="mx-auto w-48 bg-midnightBlue-200 rounded-full"
                src={process.env.PUBLIC_URL + '/assets/caddyshack_no_bg.png'}
                alt="logo"
            />
            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                Caddy's Hack
            </h4>
        </div>
    );
}
