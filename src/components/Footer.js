export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 mt-auto text-center text-gray-400 text-sm bg-white border-t">
            <p>© {currentYear}</p>
        </footer>
    );
}