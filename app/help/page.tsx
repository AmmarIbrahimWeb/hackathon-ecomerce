import Image from 'next/image';
import React from 'react';

const Help = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Form Section */}
            <div className="form text-center my-6">
                <h1 className="text-2xl font-semibold my-6 uppercase">Get Help</h1>
                <div className="flex justify-center items-center">
                    <input
                        className="w-full max-w-md text-sm px-5 py-3 border border-gray-300 rounded-md"
                        type="text"
                        placeholder="What can we help you with?"
                    />
                    <button className="ml-2 p-2 text-gray-500 hover:text-gray-700">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">
                {/* FAQs Section */}
                <div className="faqs flex-1 px-4 lg:px-11">
                    <h2 className="text-2xl font-semibold my-6 uppercase">What Payment Options Can I Use on Nike Orders?</h2>
                    <p className="mb-4">
                        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                        <li>
                            If you enter your PAN information at checkout, {`you'll`} be able to pay for your order with PayTM or a local credit or debit card.
                        </li>
                        <li>Apple Pay</li>
                    </ul>
                    <p className="mt-4">
                        <span className="underline font-semibold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If {`you're`} not already a Member,{' '}
                        <span className="underline font-semibold">join us</span> today.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="btn">Join Us</button>
                        <button className="btn">Shop Nike</button>
                    </div>

                    {/* FAQs */}
                    <div className="my-6">
                        <h3 className="font-semibold text-xl mb-4">FAQs</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Does my card need international purchases enabled?</h4>
                                <p>
                                    Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Can I pay for my order with multiple methods?</h4>
                                <p>No, payment for Nike orders {`can't`} be split between multiple payment methods.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">What payment method is accepted for SNKRS orders?</h4>
                                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Why {`don't`} I see Apple Pay as an option?</h4>
                                <p>
                                    To see Apple Pay as an option in the Nike App or on Nike.com, {`you'll`} need to use a compatible Apple device running the latest OS, be signed in to your iCloud account
                                    and have a supported card in your Wallet. Additionally, {`you'll`} need to use Safari to use Apple Pay on Nike.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:block flex-none">
                    <Image src="/faqs.png" alt="FAQs Banner" width={250} height={1000} />
                </div>
            </div>
        </div>
    );
};

export default Help;