import Link from 'next/link'

interface HomeUIProps {
  user: any;
  buttonStage1: 'check' | 'claim' | 'claimed';
  buttonStage2: 'check' | 'claim' | 'claimed';
  isLoading: boolean;
  notification: string;
  handleButtonClick1: () => void;
  handleButtonClick2: () => void;
  handleClaim1: () => void;
  handleClaim2: () => void;
}

export default function HomeUI({
  user,
  buttonStage1,
  buttonStage2,
  isLoading,
  notification,
  handleButtonClick1,
  handleButtonClick2,
  handleClaim1,
  handleClaim2
}: HomeUIProps) {
  return (
    <div className="bg-gray-700 flex flex-col items-center justify-between h-screen">
      <div className="bg-white w-full flex flex-col items-center justify-start h-3/4">
        <div className="flex flex-col items-center mt-10">
          <div className="w-64 h-64 bg-gray-700 rounded-full overflow-hidden">
            <img alt="Black and white placeholder image" className="w-full h-full object-cover" height="256" src="https://storage.googleapis.com/a1aa/image/WYUNkYgR7iK2G52eFZ7kI72EXNou8j14cNEpcoYEfssr2QnTA.jpg" width="256"/>
          </div>
          <p className="mt-4 text-xl font-bold mb-24">{user.points} PixelDogs</p>
        </div>
        <div className="bg-gray-700 w-full max-w-md p-4 rounded-t-3xl">
          <div className="bg-gray-200 text-center py-2 rounded-full mb-4 w-2/5 mx-auto">
            <p className="font-bold">Daily Tasks..!</p>
          </div>
          <div className="flex justify-between items-center bg-gray-200 p-2 rounded-full mb-2 w-3/2">
            <p className="ml-2 font-bold">Follow Our Youtube!</p>
            <button
              onClick={() => {
                if (buttonStage1 === 'check') {
                  handleButtonClick1()
                } else if (buttonStage1 === 'claim') {
                  handleClaim1()
                }
              }}
              disabled={buttonStage1 === 'claimed' || isLoading}
              className={`bg-gray-700 text-white px-4 py-1 rounded-full mr-2 ${
                buttonStage1 === 'claimed' || isLoading ? 'cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Claiming...' : buttonStage1 === 'check' ? 'Check' : buttonStage1 === 'claim' ? 'Claim' : 'Claimed'}
            </button>
          </div>
          <div className="flex justify-between items-center bg-gray-200 p-2 rounded-full w-3/2">
            <p className="ml-2 font-bold">Follow Our Twitter!</p>
            <button
              onClick={() => {
                handleButtonClick2()
                handleClaim2()
              }}
              disabled={buttonStage2 === 'claimed'}
              className="bg-gray-700 text-white px-4 py-1 rounded-full mr-2"
            >
              {buttonStage2 === 'check' ? 'Check' : buttonStage2 === 'claim' ? 'Claim' : 'Claimed'}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 w-full py-4 flex justify-around items-center text-white border-t-4" style={{ border: '10% solid #fff' }}>
        <Link href="/">
          <a className="flex flex-col items-center">
            <i className="fas fa-home text-xl"></i>
            <p className="text-xs">Home</p>
          </a>
        </Link>
        <Link href="/invite">
          <a className="flex flex-col items-center">
            <i className="fas fa-users text-xl"></i>
            <p className="text-xs">Friends</p>
          </a>
        </Link>
        <Link href="/wallet">
          <a className="flex flex-col items-center">
            <i className="fas fa-wallet text-xl"></i>
            <p className="text-xs">Wallet</p>
          </a>
        </Link>
      </div>
    </div>
  )
}
