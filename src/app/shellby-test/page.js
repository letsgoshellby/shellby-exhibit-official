'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, Heart, Sparkles } from "lucide-react";
import Image from 'next/image';

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const resultCardRef = useRef(null);

  const questions = [
    {
      id: 1,
      text: "키즈카페에서 우리 아이는?",
      option1: "친구들과 함께 노는 것을 좋아해요",
      option2: "혼자서<br />장난감을 가지고 노는 것을 좋아해요"
    },
    {
      id: 2,
      text: "낯선 공간에서 우리 아이는?",
      option1: "새로운 공간을 파악하기 위해 탐색해요",
      option2: "보호자한테 안겨서 나오지 않아요"
    },
    {
      id: 3,
      text: "여러 사람들 앞에서<br />우리 아이는?",
      option1: "장기자랑(노래, 춤 추기)을 잘해요",
      option2: "여러 사람들에게 익숙해지는데<br />시간이 걸려요"
    },
    {
      id: 4,
      text: "새로운 놀이를 알려줬을 때<br />우리 아이는?",
      option1: "다른 사람이 하는 것을 따라하려 해요",
      option2: "자신의 방법대로 우선 해보려 해요"
    },
    {
      id: 5,
      text: "혼나는 상황일 때<br />우리 아이는?",
      option1: "잘 울고<br />혼난 이후에도 금방 그치지 않아요",
      option2: "야단을 맞아도 잘 울지 않아요"
    },
    {
      id: 6,
      text: "또래 친구들과 놀 때<br />우리 아이는?",
      option1: "또래 친구들이 요구하는 놀이에 참여해요",
      option2: "또래와 놀 때는 주로 대장 역할을 맡아요"
    },
    {
      id: 7,
      text: "장난감을 가지고 놀 때<br />우리 아이는?",
      option1: "손으로 만지고 만드는 것을 좋아해요",
      option2: "주변의 사물을 같이 이용해요"
    },
    {
      id: 8,
      text: "놀러 갈 때 우리 아이는?",
      option1: "일정에 대해서<br />수시로 부모에게 상기시켜요",
      option2: "눈 앞에 보이는 장소와 놀이에<br />관심을 가져요"
    },
    {
      id: 9,
      text: "친구들과 놀 때 우리 아이는?",
      option1: "규칙이 정해진 놀이를 좋아해요",
      option2: "규칙이 있는 놀이보다는<br />즉흥적인 놀이를 좋아해요"
    }
  ];

  const characters = {
    "리더 셸비": {
      name: "리더 셸비",
      description: "리더셸비는 많은 친구들과 함께 미리 계획한 놀이를 하는 것을 좋아해요. 리더셸비는 항상 사람들을 이끄는 역할을 하며, 사교성이 뛰어나요. 늘 즐겁고 활기찬 분위기를 만들어내요. 또한, 계획을 잘 세우고 친구들에게 좋은 아이디어를 종종 제시합니다. 그리고 다른 아이들의 이야기를 잘 듣고, 친절하게 조언을 해줘요.",
      color: "bg-red-500",
    //   icon: Star,
      image: "leader-shellby.png"
    },
    "에너자이저 셸비": {
      name: "에너자이저 셸비",
      description: "에너자이저 셸비는 활발하고 즉흥적인 성향을 가지고 있어요. 놀이터에서 노는 것을 좋아하며, 항상 에너지가 넘쳐요! 에너자이저 셸비는 주변 친구들에게 긍정적인 영향을 주지만, 때로는 고집이 세어 다투기도 해요. 하지만, 그런 순간에도 빠르게 용서하고 다시 놀이를 시작하는 경향이 있어요.",
      color: "bg-orange-500",
    //   icon: Sparkles,
      image: "energizer-shellby.png"
    },
    "가이드 셸비": {
      name: "가이드 셸비",
      description: "가이드 셸비는 활동을 꼼꼼하게 계획하고, 무지개 셸비를 따라다니며 친구들을 안내하는 역할을 해요. 가이드 셸비는 상황을 잘 판단하고, 계획대로 진행되는 것을 선호해요. 또래 무리를 효율적으로 조직하며, 모두가 재미있는 놀이를 즐길 수 있도록 도와줘요. 항상 친절한 태도로 사람들을 대해요.",
      color: "bg-blue-500",
    //   icon: Heart,
      image: "guide-shellby.png"
    },
    "무지개 셸비": {
      name: "무지개 셸비",
      description: "무지개 셸비는 외향적이며, 즉흥적인 성향을 가지고 있어요. 무지개 셸비는 다양한 놀이와 활동을 시도하고, 가끔은 갑작스럽게 기분이 변할 수 있어요. 친구들을 매우 좋아하지만, 때로는 예상치 못한 변화에 적응하기 어려울 수 있어요. 하지만 친구들과 늘 즐거운 시간을 보내고, 변덕스러운 성격을 가볍게 다루며 쉽게 적응합니다.",
      color: "bg-purple-500",
    //   icon: Sparkles,
      image: "rainbow-shellby.png"
    },
    "척척박사 셸비": {
      name: "척척박사 셸비",
      description: "척척박사 셸비는 조용하게 미리 계획한 놀이를 즐기며, 집중력이 뛰어나고 호기심이 많아요. 척척박사 셸비는 언제나 차분하고 침착한 모습을 보이며, 신중하게 행동하고 의사소통을 해요. 친구들과 함께 시간을 보낼 때도 미리 준비를 하고 꼼꼼하게 계획을 세우며, 모두가 재미있게 놀 수 있도록 도와줘요.",
      color: "bg-green-500",
    //   icon: Star,
      image: "professor-shellby.png"
    },
    "예술가 셸비": {
      name: "예술가 셸비",
      description: "예술가 셸비는 내향적이면서, 감정을 즉흥적으로 표현해요. 예술가 셸비는 조용한 성격이지만, 감정을 표현할 때 놀라운 창의력을 보여줘요. 친구들과 어울릴 때도 조용한 놀이를 선호해요.",
      color: "bg-pink-500",
    //   icon: Heart,
      image: "artist-shellby.png"
    },
    "과학자 셸비": {
      name: "과학자 셸비",
      description: "과학자 셸비는 미리 계획한 놀이를 즐기며, 과학 연구와 학습에 관심이 많아요. 과학자 셸비는 항상 신중하고 차분한 성향을 가지고 있으며, 친구들과 함께 놀 때도 미리 계획을 세워 재미있는 경험을 만들어내요. 친절하게 다른 친구들을 도우며, 함께 지적인 활동을 즐겨요.",
      color: "bg-teal-500",
    //   icon: Star,
      image: "scientist-shellby.png"
    },
    "반전매력 셸비": {
      name: "반전매력 셸비",
      description: "반전매력 셸비는 갑작스러운 감정을 표현하기 어려워하는 편이에요. 그러나, 가끔은 예상치 못한 즉흥적인 행동을 보여주기도 해요. 반전매력 셸비는 친구들과 함께 놀 때 내향적인 성격을 지닌 동시에 감정을 속으로 숨기지 않으며, 조용한 시간과 활기찬 놀이 모두를 즐겨요.",
      color: "bg-indigo-500",
    //   icon: Sparkles,
      image: "surprise-shellby.png"
    }
  };

  const totalQuestions = questions.length;

  const calculateResult = () => {
    // 외향성 점수 (1=외향, 0=내향)
    const extroversion = answers[0] + answers[1] + answers[2];
    
    // 리더십 점수 (1=팔로워, 0=리더)
    const leadership = 3 - (answers[3] + answers[5] + answers[8]);
    
    // 계획성 점수 (1=계획적, 0=즉흥적)
    const planning = answers[7] + answers[8] + (1 - answers[6]);
    
    // 감정표현 점수 (1=감정적, 0=차분)
    const emotional = answers[4] + (1 - answers[1]) + (1 - answers[2]);

    // 8가지 캐릭터 중 가장 적합한 것을 선택
    if (extroversion >= 2 && leadership >= 2 && planning >= 2) {
      return "리더 셸비";
    } else if (extroversion >= 2 && leadership >= 1 && planning <= 1) {
      return "에너자이저 셸비";
    } else if (extroversion >= 2 && leadership <= 1 && planning >= 2) {
      return "가이드 셸비";
    } else if (extroversion >= 2 && planning <= 1 && emotional >= 2) {
      return "무지개 셸비";
    } else if (extroversion <= 1 && planning >= 2 && emotional <= 1) {
      return "척척박사 셸비";
    } else if (extroversion <= 1 && planning <= 1 && emotional >= 1) {
      return "예술가 셸비";
    } else if (extroversion <= 1 && planning >= 2) {
      return "과학자 셸비";
    } else {
      return "반전매력 셸비";
    }
  };

  const handleAnswer = (answerValue) => {
    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

const downloadResultImage = async () => {
  if (!resultCardRef.current) return;
  
  try {
    const domtoimage = await import('dom-to-image');
    
    const dataUrl = await domtoimage.default.toPng(resultCardRef.current, {
      bgcolor: '#ffffff',
      quality: 1.0,
      width: resultCardRef.current.offsetWidth,
      height: resultCardRef.current.offsetHeight,
    });
    
    const link = document.createElement('a');
    link.download = `shellby-result-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    
  } catch (error) {
    console.error('이미지 저장 중 오류 발생:', error);
    alert('이미지 저장에 실패했습니다.');
  }
};

  if (isComplete) {
    const result = calculateResult();
    const character = characters[result];
    // const IconComponent = character.icon;

    return (
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="relative bg-gradient-to-br from-[#059669] to-[#06b37a] text-white py-8">
          <div className="absolute top-4 left-4 text-white/80 text-sm">
            ©푸망
          </div>
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              우리 아이 유형 테스트
            </Badge>
            <h1 className="text-3xl font-bold">테스트 완료!</h1>
          </div>
        </section>

        {/* Result Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="shadow-lg" ref={resultCardRef}>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-[#059669] mb-4">
                  우리 아이는
                </CardTitle>
                
                {/* Character Image Placeholder */}
                <div className="mx-auto mb-6">
                  {/* <div className={`w-32 h-32 ${character.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-16 h-16 text-white" />
                  </div> */}
                  {/* 실제 캐릭터 이미지 */}
                  <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center p-4">
                    <Image 
                      src={`/images/${character.image}`}
                      alt={character.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ display: 'block', margin: '0 auto' }}
                      onError={(e) => {
                        // 이미지 로드 실패 시 fallback
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback 플레이스홀더 */}
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300" style={{display: 'none'}}>
                      <div className="text-center text-gray-500">
                        <div className="text-lg font-bold mb-2">{character.name}</div>
                        <div className="text-sm">캐릭터 이미지</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{fontFamily: 'ChangwonDangamAsac', color: '#059669'}}>
                  {character.name}
                </h2>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {character.description}
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="pt-4 space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-[#059669] hover:bg-[#047857] text-white font-semibold py-8 text-lg"
                      onClick={() => window.open('https://forms.gle/qtPowV7FRTM4L9Rj9', '_blank')}
                    >
                      우리 아이에게 맞는<br />
                      전문가 상담 경험해보기
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-[#059669] text-[#059669] hover:bg-gray-50 font-semibold py-8 text-lg"
                      onClick={resetSurvey}
                    >
                      다시 테스트하기
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-[#0173ee] text-[#0173ee] hover:bg-gray-50 font-semibold py-8 text-lg"
                      onClick={() => window.open('https://poomang.com/', '_blank')}
                    >
                      푸망의 다른 테스트 하러 가보기!
                    </Button>
                  </div>
                </div>
                
                {/* Share Section */}
                <div className="border-t pt-6">
                  <p className="text-center text-gray-600 mb-4">
                    테스트 결과를 공유해보세요!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: `우리 아이는 ${character.name}!`,
                            text: character.description,
                            url: window.location.href
                          });
                        }
                      }}
                    >
                      결과 공유하기
                    </Button>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <p className="text-center text-gray-600 mb-4">
                    테스트 결과 이미지를 저장해보세요!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={downloadResultImage}
                    >
                      이미지 저장하기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6">
          <Button 
            size="lg" 
            className="rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={() => window.open('http://pf.kakao.com/_gPdPn', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            카톡 상담
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#059669] to-[#06b37a] text-white py-8">
        <div className="absolute top-4 left-4 text-white/80 text-sm">
          ©푸망
        </div>
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            우리 아이 유형 테스트
          </Badge>
          <h1 className="text-3xl font-bold">
            우리 아이는 어떤 유형일까?
          </h1>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="text-2xl font-bold text-[#059669]">
                {currentQuestion + 1}
              </span>
              <span className="text-lg text-gray-400 mx-2">/</span>
              <span className="text-lg text-gray-600 font-semi-bold">{totalQuestions}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div 
                className="bg-[#059669] h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {/* Question Card */}
          <Card className="shadow-lg mb-8">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: questions[currentQuestion].text }} />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 pb-8">
              <Button
                size="lg"
                onClick={() => handleAnswer(1)}
                className="w-full bg-[#059669] hover:bg-[#047857] text-white py-8 text-base md:text-lg font-semi-bold transition-colors"
              >
                <span dangerouslySetInnerHTML={{ __html: questions[currentQuestion].option1 }} />
              </Button>
              
              <Button
                size="lg"
                onClick={() => handleAnswer(0)}
                className="w-full bg-[#059669] hover:bg-[#047857] text-white py-8 text-base md:text-lg font-semi-bold transition-colors"
              >
                <span dangerouslySetInnerHTML={{ __html: questions[currentQuestion].option2 }} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    
    </main>
  );
};

export default TestPage;