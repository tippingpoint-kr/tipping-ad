
import React, { useState, useEffect } from 'react';

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 group">
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
            TIPPING<span className="text-tp-red">!</span>POINT
          </span>
        </a>
        <nav className="hidden md:flex space-x-10">
          {[
            { name: '서비스 소개', id: 'target' },
            { name: '성과 지표', id: 'stats' },
            { name: '광고 매체', id: 'media' },
            { name: '문의하기', id: 'contact' }
          ].map((item, idx) => (
            <a 
              key={idx}
              href={`#${item.id}`}
              className={`text-sm font-bold hover:text-tp-red transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="bg-tp-red text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-black transition-all">
          광고 문의
        </a>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const backgroundImageUrl = "https://lh3.googleusercontent.com/d/1rbNDsG3wBkOzpwxIY0AW_wWtVRUbBSyp"; 
  return (
    <div className="relative h-screen flex items-center bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImageUrl} alt="Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 border border-tp-red text-tp-red rounded-full text-sm font-bold mb-8 animate-pulse bg-tp-red/10">
            Active Senior Fandom Marketing No.1
          </div>
          <h1 className="text-white text-5xl md:text-8xl font-black leading-tight mb-8">
            5070 <span className="text-tp-red">액티브 시니어</span>를<br />움직이는 강력한 임팩트
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl font-medium max-w-2xl mb-10">
            티핑포인트는 트로트 시니어 팬덤에 특화된 멀티채널 콘텐츠 파이프라인을 운영하는 디지털 미디어 기업입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-tp-red text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-tp-red transition-all text-center">
              미디어 믹스 제안서 받기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    { label: '연간 유튜브 조회수', value: '7.74억+', sub: '2025년 기준' },
    { label: '총 구독자 수', value: '100만+', sub: '전 채널 통합' },
    { label: '월 평균 방문자(매거진)', value: '400,000+', sub: '트롯매거진 웹' },
    { label: '연간 콘텐츠 제작량', value: '25,000+', sub: '2025년 기준' },
  ];
  return (
    <div className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-gray-400 text-sm font-bold uppercase mb-2">{stat.label}</p>
              <h3 className="text-5xl font-black text-tp-red mb-2">{stat.value}</h3>
              <p className="text-gray-500 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TargetInsight: React.FC = () => {
  const channelImageUrl = "https://lh3.googleusercontent.com/d/1SlzJvo77NeXLLBS-yTuFNw07yIS4wK8j";
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={channelImageUrl} alt="Infographic" className="w-full h-auto rounded-2xl shadow-xl" />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              168조원의<br /><span className="text-tp-red">액티브 시니어 시장</span>을 선점하세요
            </h2>
            <p className="text-gray-600 text-lg">
              티핑포인트는 단순히 조회수를 넘어, 시니어 팬덤이 모이는 독자적인 채널 생태계를 보유하고 있습니다.
            </p>
            <div className="space-y-4">
              {["압도적인 미디어 점유율", "공신력 있는 트롯 매거진", "실질적인 전환 임팩트"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-lg">
                  <span className="w-6 h-6 bg-tp-red text-white rounded-full flex items-center justify-center text-sm">{i+1}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediaSolutions: React.FC = () => {
  const channels = [
    { title: "유튜브 채널", tagline: "100만+ 구독자 네트워크", options: ["브랜디드 콘텐츠", "숏폼 바이럴", "커뮤니티 광고"] },
    { title: "트롯매거진", tagline: "월 40만+ PV 공식 미디어", options: ["기사형 광고", "전면 배너", "언론 보도"] },
    { title: "티라이브", tagline: "트로트 전용 슈퍼앱", options: ["라이브 커머스", "인스트림 광고", "PPL"] }
  ];
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16">시니어 타겟 <span className="text-tp-red">미디어 솔루션</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-tp-red">
              <h3 className="text-2xl font-black mb-2">{c.title}</h3>
              <p className="text-tp-red font-bold text-sm mb-6">{c.tagline}</p>
              <ul className="space-y-3">
                {c.options.map((opt, j) => (
                  <li key={j} className="flex items-center text-gray-700 font-medium">✓ {opt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('접수되었습니다.');
  };
  return (
    <div className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden flex flex-col md:row">
        <form onSubmit={handleSubmit} className="p-12 bg-white w-full space-y-4">
          <h2 className="text-3xl font-black mb-6">광고 문의하기</h2>
          <input className="w-full border p-3 rounded" placeholder="회사명" required />
          <input className="w-full border p-3 rounded" placeholder="담당자 성함" required />
          <input className="w-full border p-3 rounded" type="email" placeholder="이메일" required />
          <textarea className="w-full border p-3 rounded h-32" placeholder="문의 내용" required></textarea>
          <button className="w-full bg-tp-red text-white py-4 rounded-xl font-black text-xl">문의 보내기</button>
        </form>
      </div>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-12 border-t border-white/10 text-center">
    <div className="container mx-auto px-6">
      <span className="text-2xl font-black tracking-tighter">TIPPING<span className="text-tp-red">!</span>POINT</span>
      <p className="text-gray-500 mt-4 text-sm">© 2025 Tippingpoint Corp. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="hero"><Hero /></section>
        <section id="target"><TargetInsight /></section>
        <section id="stats"><Statistics /></section>
        <section id="media"><MediaSolutions /></section>
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
