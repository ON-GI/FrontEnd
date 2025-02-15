import React from 'react';

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReject: () => void;
}

const RejectModal: React.FC<RejectModalProps> = ({ isOpen, onClose, onReject }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex h-[210px] w-[334px] flex-col items-center justify-center rounded-lg bg-white shadow-lg">
        {/* 텍스트 */}
        <p className="mb-6 text-center text-[24px] leading-[120%] font-semibold text-gray-900">
          어르신의 요청을 <br /> 거절하는게 맞으신가요?
        </p>

        {/* 버튼 영역 */}
        <div className="flex gap-[11px]">
          <button className="h-[43px] w-[140px] rounded-md bg-gray-300 font-semibold text-gray-900" onClick={onClose}>
            아니요
          </button>
          <button className="h-[43px] w-[140px] rounded-md bg-[#57AD57] font-semibold text-white" onClick={onReject}>
            네
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
