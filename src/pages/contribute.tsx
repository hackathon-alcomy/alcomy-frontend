import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContributePage() {
  const [type, setType] = useState("ingredient");
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      {/* Title */}
      <h1 className="mb-6 text-2xl font-semibold">기여하기</h1>

      {/* Radios (재료 / 칵테일 레시피) */}
      <RadioGroup
        value={type} // ✅ 현재 선택된 값
        onValueChange={setType} // ✅ 선택 시 업데이트
        className="mb-6 "
      >
        <div className="flex items-center gap-3">
          <RadioGroupItem value="ingredient" id="r1" />
          <Label className="text-md" htmlFor="r1">
            재료
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="recipe" id="r2" />
          <Label className="text-md" htmlFor="r2">
            칵테일 레시피
          </Label>
        </div>
      </RadioGroup>

      {/* Labels only (시안 그대로, 입력칸 없음) */}
      <div className="space-y-8 mb-12">
        <div>
          <div className="text-lg">제목</div>
          <Input placeholder="제목을 입력해주세요" />
        </div>
        <div>
          <div className="text-lg">설명</div>
          <Textarea placeholder="설명을 입력해주세요" className="h-40 py-2" />
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            className="text-md w-full"
            onClick={() => setSubmit(!submit)}
          >
            제출하기
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ALCOMY에 기여해주셔서 감사합니다.</DialogTitle>
            <DialogDescription>
              스태프 내부 검토 후 등록됩니다.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
