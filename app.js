const { useState, useEffect } = React;
const { ArrowRight, Shield } = lucide;

const SalesPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-red-600 p-2 text-center animate-pulse">
        <p className="text-white font-bold">🔥 OFERTA ESPECIAL: 70% DE DESCONTO APENAS HOJE! 🔥</p>
      </div>

      <div className="bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 text-yellow-400 text-xl font-bold">
              📢 AUMENTE SUAS VENDAS AGORA MESMO!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O MAIOR PACK de Artes Editáveis
              <span className="text-blue-400"> para E-commerce Esportivo!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              +250 Templates Profissionais que Vão Transformar seu Negócio 🚀
            </p>
            
            <div className="bg-gray-900 p-4 rounded-lg mb-8 inline-block">
              <p className="text-yellow-400 mb-2">⚠️ Esta oferta expira em:</p>
              <div className="flex gap-4 justify-center text-2xl font-bold">
                <div>{String(timeLeft.hours).padStart(2, '0')}h</div>
                <div>{String(timeLeft.minutes).padStart(2, '0')}m</div>
                <div>{String(timeLeft.seconds).padStart(2, '0')}s</div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <div className="text-gray-400 line-through text-xl">De R$ 197,00 por apenas</div>
              <div className="text-4xl font-bold text-green-400 mb-4">R$ 59,90</div>
              <a href="#comprar" className="bg-blue-600 text-2xl font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer animate-bounce">
                QUERO AUMENTAR MINHAS VENDAS AGORA!
                <ArrowRight className="w-6 h-6" />
              </a>
              <div className="mt-4 text-yellow-400">
                ⚡ Acesso Imediato + Bônus Exclusivos!
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div>✨ +1000 Downloads</div>
              <div>⭐ 4.9/5 Avaliações</div>
              <div>🏆 Melhor Avaliado</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Está Cansado de...
        </h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
            <div className="text-red-500">❌</div>
            <p>Perder vendas por falta de artes profissionais?</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
            <div className="text-red-500">❌</div>
            <p>Gastar fortunas com designers freelancers?</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
            <div className="text-red-500">❌</div>
            <p>Demorar horas para criar uma única arte?</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
            <div className="text-green-500 text-xl">✅</div>
            <p className="font-bold">Com Este Pack, Você Resolve Tudo Isso em Minutos!</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-blue-900/20 to-black">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🎁 Tudo Isso Incluído no Seu Pack
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">🚀</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">32</span> artes incríveis para stories e criativos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">💰</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">12</span> artes irresistíveis de promoção "Leve 3, Pague 2"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🏷️</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">19</span> artes para promoções e atacado</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📱</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">47</span> banners otimizados para sites mobile</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">💻</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">108</span> banners impactantes para sites desktop</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">⚽</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">22</span> artes exclusivas de seleções e camisas retrô</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📸</div>
              <p className="text-lg"><span className="font-bold text-yellow-400">13</span> artes perfeitas para destaque no Instagram</p>
            </[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/ricardo-cas/pandas/tree/eefd8f3ed9250c15e029b7ae59a24ef9f7ffc4ab/GUIA_MARKDOWN.MD?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")