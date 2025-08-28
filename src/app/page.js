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
      <section className="relative h-[600px] bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">2025 교육 박람회</Badge>
            <h1 className="text-5xl font-bold mb-4">
              우리 아이에게 맞는<br />
              전문가를 만나보세요
            </h1>
            <p className="text-xl mb-8 text-white/90">
              느린학습자 아이를 위한 맞춤형 전문가 상담 서비스
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/shellby-test">우리 아이 유형 테스트</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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
                <p className="font-semibold">2025년 2월 15-17일</p>
                <p className="text-sm text-gray-600">3일간</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">운영시간</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">10:00 - 18:00</p>
                <p className="text-sm text-gray-600">마지막날 17:00 마감</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <MapPin className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">장소</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">코엑스 Hall A</p>
                <p className="text-sm text-gray-600">부스 번호: A-15</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Users className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">참가대상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">학부모 & 교육 전문가</p>
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
                  언어치료, 심리상담, 특수교육 등 다양한 분야의 검증된 전문가를 매칭해드립니다.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>맞춤형 진단</CardTitle>
                <CardDescription>
                  아이의 학습 유형과 특성을 정확히 파악하여 개인별 맞춤 교육 계획을 수립합니다.
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
                    <p className="font-semibold">무료 아이 유형 테스트 & 상담</p>
                    <p className="text-sm text-gray-600">현장에서 전문가와 1:1 상담 (선착순 100명)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 2</Badge>
                  <div>
                    <p className="font-semibold">사전등록 할인</p>
                    <p className="text-sm text-gray-600">박람회 방문 전 사전등록 시 첫 달 이용료 30% 할인</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 3</Badge>
                  <div>
                    <p className="font-semibold">추천인 이벤트</p>
                    <p className="text-sm text-gray-600">친구 추천 시 양쪽 모두 추가 할인 혜택</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600">EVENT 4</Badge>
                  <div>
                    <p className="font-semibold">교육 자료 패키지 증정</p>
                    <p className="text-sm text-gray-600">가입자 전원 맞춤형 교육 가이드북 제공</p>
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
                <CardTitle>코엑스 Hall A</CardTitle>
                <CardDescription>서울특별시 강남구 영동대로 513</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🚇 지하철</h4>
                  <p className="text-sm text-gray-600">
                    2호선 삼성역 5, 6번 출구 (도보 10분)<br />
                    9호선 봉은사역 7번 출구 (도보 15분)
                  </p>
                </div>
                
                <div>
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
                </div>
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
        <Button size="lg" className="rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black">
          <MessageCircle className="w-5 h-5 mr-2" />
          카톡 상담
        </Button>
        <Button size="lg" className="rounded-full shadow-lg">
          <Phone className="w-5 h-5 mr-2" />
          전화 문의
        </Button>
      </div>
    </main>
  );
}