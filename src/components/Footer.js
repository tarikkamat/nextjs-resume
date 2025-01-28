//export default function Footer() {
    //const currentYear = new Date().getFullYear();

    //return (
     //   <footer className="w-full py-6 mt-auto text-center text-gray-400 text-sm bg-white border-t">
      //      <p>© {currentYear}</p>
       // </footer>
    //);
//}

"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const btcAddress = "bc1qr9vnlr2ewrqzc8ldcwa2yyht9y75tjyjckz6zy";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(btcAddress);
    alert("Bitcoin address copied to clipboard!"); // Optional alert for feedback
  };

  return (
    <footer className="w-full py-6 mt-auto text-center text-gray-400 text-sm bg-white border-t">
      <p>© {currentYear}</p>

      <div className="mt-4">
        <p>Support us with Bitcoin:</p>
        <input
          type="text"
          value={btcAddress}
          readOnly
          className="border p-2 rounded-md text-center w-64 mx-auto"
        />
        <br />
        <button
          onClick={handleCopyClick}
          className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
        >
          Copy Address
        </button>
      </div>
    </footer>
  );
}

