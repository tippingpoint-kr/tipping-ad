
import React, { useState, useEffect } from 'react';

// --- Sub-Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter">
          <span className={isScrolled ? 'text-black' : 'text-white'}>TIPPING<span className="text-tp-red">!</span>POINT</span>
        </a>
        <nav className="hidden md:flex space-x-10">
          {['서비스 소개', '성과 지표', '광고 매체', '문의하기'].map((item, i) => (
            <a key={i} href={`#section${i}`} className={`text-sm font-bold hover:text-tp-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>{item}</a>
          ))}
        </nav>
        <a href="#contact" className="bg-tp-red text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-black transition-all">광고 문의</a>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center bg-black overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://lh3.googleusercontent.com/d/1rbNDsG3wBkOzpwxIY0AW_wWtVRUbBSyp" className="w-full h-full object-cover opacity-50" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-block px-4 py-1 border border-tp-red text-tp-red rounded-full text-xs font-bold mb-6 bg-tp-red/10 uppercase tracking-widest">Active Senior Marketing No.1</div>
        <h1 className="text-white text-5xl md:text-8xl font-black leading-[1.1] mb-8">5070 <span className="text-tp-red">액티브 시니어</span>를<br />움직이는 강력한 임팩트</h1>
        <p className="text-gray-300 text-lg md:text-2xl font-medium max-w-2xl mb-10 leading-relaxed">티핑포인트는 트로트 시니어 팬덤에 특화된 멀티채널 콘텐츠 파이프라인을 운영하는 디지털 미디어 기업입니다.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-tp-red text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-tp-red transition-all text-center">제안서 받기</a>
        </div>
      </div>
    </div>
  </section>
);

const Statistics: React.FC = () => {
  const stats = [
    { label: '연간 유튜브 조회수', value: '7.74억+', sub: '2025년 기준' },
    { label: '총 구독자 수', value: '100만+', sub: '전 채널 통합' },
    { label: '월 평균 방문자', value: '400,000+', sub: '트롯매거진 웹' },
    { label: '콘텐츠 제작량', value: '25,000+', sub: '연간 기준' },
  ];
  return (
    <section id="section1" className="py-24 bg-black border-y border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-widest">{s.label}</p>
            <h3 className="text-4xl md:text-6xl font-black text-tp-red mb-1">{s.value}</h3>
            <p className="text-gray-600 text-[10px]">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Content: React.FC = () => (
  <section id="section0" className="py-32 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <img src="https://lh3.googleusercontent.com/d/1SlzJvo77NeXLLBS-yTuFNw07yIS4wK8j" className="w-full h-auto rounded-3xl shadow-2xl border border-gray-100" alt="Channel" />
      </div>
      <div className="lg:w-1/2 space-y-8">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">168조원의<br/><span className="text-tp-red">액티브 시니어 시장</span>을<br/>선점하세요</h2>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">티핑포인트는 100만 시니어 팬덤의 일상에 스며드는 독보적 채널 생태계를 통해 귀사의 브랜드를 각인시킵니다.</p>
        <ul className="space-y-4 font-bold text-xl">
          <li>1. 압도적인 미디어 점유율</li>
          <li>2. 공신력 있는 트롯 매거진</li>
          <li>3. 실질적인 구매 전환 임팩트</li>
        </ul>
      </div>
    </div>
  </section>
);

const Media: React.FC = () => (
  <section id="section2" className="py-32 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-16">최적의 <span className="text-tp-red">미디어 솔루션</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {[
          { t: '유튜브 채널', sub: '100만+ 구독자', items: ['브랜디드 콘텐츠', '숏폼 바이럴'] },
          { t: '트롯매거진', sub: '월 40만+ PV', items: ['네이티브 기사', '배너 광고'] },
          { t: '티라이브', sub: '팬덤 수퍼앱', items: ['라이브 커머스', '인스트림 광고'] }
        ].map((m, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-tp-red">
            <h3 className="text-2xl font-black mb-1">{m.t}</h3>
            <p className="text-tp-red font-bold text-sm mb-6">{m.sub}</p>
            <ul className="space-y-3 font-medium text-gray-700">
              {m.items.map((it, j) => <li key={j}>✓ {it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-32 bg-black">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 p-16 bg-tp-red text-white">
          <h2 className="text-4xl font-black mb-8 leading-tight">비즈니스의<br/>티핑포인트를<br/>만드세요.</h2>
          <p className="font-medium">tippingpoint.kr@gmail.com</p>
        </div>
        <form className="md:w-1/2 p-16 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('문의가 접수되었습니다.'); }}>
          <input className="w-full border-b-2 py-3 outline-none focus:border-tp-red font-bold" placeholder="회사명" required />
          <input className="w-full border-b-2 py-3 outline-none focus:border-tp-red font-bold" placeholder="담당자명" required />
          <input className="w-full border-b-2 py-3 outline-none focus:border-tp-red font-bold" type="email" placeholder="이메일" required />
          <textarea className="w-full border-b-2 py-3 outline-none focus:border-tp-red font-bold h-24" placeholder="문의 내용" required></textarea>
          <button className="w-full bg-black text-white py-4 rounded-xl font-black text-xl hover:bg-tp-red transition-all">보내기</button>
        </form>
      </div>
    </div>
  </section>
);

const App: React.FC = () => (
  <div className="antialiased">
    <Header />
    <Hero />
    <Statistics />
    <Content />
    <Media />
    <Contact />
    <footer className="bg-black py-8 text-center text-gray-600 text-xs border-t border-white/5">
      © 2025 Tippingpoint Corp. All rights reserved.
    </footer>
  </div>
);

export default App;
