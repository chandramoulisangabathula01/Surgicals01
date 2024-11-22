import Image from 'next/image';

export function TestImage() {
  return (
    <div className="relative w-64 h-64">
      <Image
        src="/images/4.png"
        alt="Test"
        fill
        className="object-contain"
      />
    </div>
  );
} 