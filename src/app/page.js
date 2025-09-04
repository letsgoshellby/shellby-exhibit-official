'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, Brain, Heart, Sparkles, ChevronRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#059669] to-[#06b37a] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">2025 대한민국 사회서비스 박람회</Badge>
            <h1 className="text-4xl font-bold mb-4">
              우리 아이에게 맞는<br />
              전문가를 만나보세요
            </h1>
            <p className="text-xl mb-8 text-white/90">
              느린학습자 아이를 위한<br />
              맞춤형 전문가 상담 서비스
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-[#059669] hover:bg-gray-100 font-semibold">
                <Link href="/shellby-test">우리 아이 유형 테스트</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-[#059669] border-white bg-white hover:bg-gray-100 font-semibold"
                onClick={() => window.open('https://forms.google.com/example-form', '_blank')}
              >
                상담 예약하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">박람회 정보</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Calendar className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">일시</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">2025년 9월 9-10일</p>
                <p className="text-sm text-gray-600">2일간</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">운영시간</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">13:00 - 15:00</p>
                <p className="text-sm text-gray-600">마지막날 15:30 마감</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <MapPin className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">장소</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">양재 aT센터 제1전시장</p>
                <p className="text-sm text-gray-600">부스 번호: A-03</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Users className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">참가대상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">학부모 & 교육 전문가 등</p>
                <p className="text-sm text-gray-600">사전등록 시 혜택</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">쉘비와 함께하는 맞춤 교육</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            느린학습자 아이들을 위한 전문가 매칭 플랫폼으로,
            아이의 특성에 맞는 최적의 교육 전문가를 연결해드립니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>전문가 매칭</CardTitle>
                <CardDescription>
                  학부모를 위한 아이 이해하기, 사회성 등 다양한 분야의 검증된 전문가를 매칭해드립니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>맞춤형 진단</CardTitle>
                <CardDescription>
                  셸메이트의 전문가는 아이의 학습 유형과 특성을 정확히 파악하여 개인별 맞춤 교육 계획을 수립합니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>지속적인 관리</CardTitle>
                <CardDescription>
                  정기적인 상담과 피드백을 통해 아이의 성장 과정을 체계적으로 관리합니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Benefits Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">현장 이벤트 & 혜택</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">박람회 특별 혜택</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 1</Badge>
                  <div>
                    <p className="font-semibold">“내 자녀의 유형은?” 테스트</p>
                    <p className="text-sm text-gray-600">1분 만에 우리 아이의 성향 알아보고 선물까지!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 2</Badge>
                  <div>
                    <p className="font-semibold">셸비만의 단독 굿즈 쓸어담기</p>
                    <p className="text-sm text-gray-600">사회서비스박람회를 위해 제작된 셸비 특별 굿즈 증정!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 3</Badge>
                  <div>
                    <p className="font-semibold">셸비 캐릭터 색칠공부</p>
                    <p className="text-sm text-gray-600">부스에서 진행하는 캐릭터 색칠공부 이벤트에도 참여해보세요!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 4</Badge>
                  <div>
                    <p className="font-semibold">상담 앱 셸메이트에 할인 쿠폰 지급</p>
                    <p className="text-sm text-gray-600">런칭 즉시 사용 가능한 사회서비스박람회 특전 쿠폰 지급!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">오시는 길</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>양재 aT센터 제1전시장</CardTitle>
                <CardDescription>서울특별시 서초구 강남대로 27</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🚇 지하철</h4>
                  <p className="text-sm text-gray-600">
                    신분당선 삼성역 4번 출구 (도보 60m)<br />
                  </p>
                </div>
                
                {/* <div>
                  <h4 className="font-semibold mb-2">🚌 버스</h4>
                  <p className="text-sm text-gray-600">
                    간선: 146, 341, 360, 333, 740<br />
                    지선: 2415, 3217, 3412, 3414, 3417
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🚗 주차</h4>
                  <p className="text-sm text-gray-600">
                    코엑스 지하주차장 이용<br />
                    박람회 참가자 3시간 무료 (부스에서 확인 도장)
                  </p>
                </div> */}
              </CardContent>
            </Card>
            
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>지도가 여기 표시됩니다</p>
                <p className="text-sm">(카카오맵 또는 네이버맵 API 연동)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button 
          size="lg" 
          className="rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black"
          onClick={() => window.open('http://pf.kakao.com/_gPdPn', '_blank')}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          카톡 상담
        </Button>
        {/* <Button size="lg" className="rounded-full shadow-lg">
          <Phone className="w-5 h-5 mr-2" />
          메일 문의
        </Button> */}
      </div>
    </main>
  );
}