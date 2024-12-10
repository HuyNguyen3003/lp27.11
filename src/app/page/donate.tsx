import React from "react";
import Image from "next/image";

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  imageUrl: string;
}

interface DonateProps {
  groomBankDetails: BankDetails;
  brideBankDetails: BankDetails;
}

const Donate: React.FC<DonateProps> = ({
  groomBankDetails,
  brideBankDetails,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-black text-3xl font-bold text-center mb-4">
        Hộp mừng cưới
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám
        cưới của chúng tôi.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:w-1/2 mb-8 md:mb-0">
          <p className="text-black text-xl font-semibold mb-4">Đến chú rể</p>
          <div className="flex flex-col items-center">
            <Image
              src={groomBankDetails.imageUrl}
              alt="Groom Bank"
              width={150}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700 text-lg font-semibold">
              {groomBankDetails.bankName}
            </p>
            <p className="text-gray-700"> {groomBankDetails.accountName}</p>
            <p className="text-gray-700">
              Số tài khoản: {groomBankDetails.accountNumber}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <p className="text-black text-xl font-semibold mb-4">Đến cô dâu</p>
          <div className="flex flex-col items-center">
            <Image
              src={brideBankDetails.imageUrl}
              alt="Bride Bank"
              width={150}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700 text-lg font-semibold">
              {brideBankDetails.bankName}
            </p>
            <p className="text-gray-700">{brideBankDetails.accountName}</p>
            <p className="text-gray-700">
              Số tài khoản: {brideBankDetails.accountNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
