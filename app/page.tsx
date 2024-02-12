import { PollCreateForm } from "./form";

export let metadata = {
  title: "CryptoPlaza Farcaster polls",
  description: "Poll creator for farcaster",
};

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2" style={{backgroundImage: "url('https://ipfs.decentralized-content.com/ipfs/QmU5xXfFM5JKwPRnDhPK9BxiiE5N1oJHJfJqxcwcsxBJgw')", backgroundSize: "cover"}}>
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <div className="flex justify-center items-center bg-black rounded-full w-16 sm:w-24 h-16 sm:h-24 my-8">
          <img src="https://ipfs.decentralized-content.com/ipfs/QmX18eetXj1QBGZ25mCbqYkkkYLmAZfdbJXiFn31Q2qD7n" alt="CryptoPlaza Logo"  />
        </div>
        <h1 className="text-lg sm:text-2xl font-bold mb-2" style={{color: "white"}}>
          Cryptoplaza Farcaster Polls
        </h1>
        <h2 className="text-md sm:text-xl mx-4" style={{color: "white"}}>
          Create a new poll with upto 4 options
        </h2>
        <div className="flex flex-wrap items-center justify-around max-w-4xl my-8 sm:w-full bg-white rounded-md shadow-xl h-full border border-gray-100">
          <PollCreateForm />
        </div>
      </main>
    </div>
  );
}
