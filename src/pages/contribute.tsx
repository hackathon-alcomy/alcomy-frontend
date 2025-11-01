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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      alert("제목과 설명을 모두 입력해주세요.");
      return;
    }

    // 현재는 'ingredient' 타입만 처리합니다.
    if (type === "ingredient") {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/ingredient`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description }),
          }
        );

        if (response.ok) {
          setIsSuccess(true); // 성공 시 다이얼로그 표시
        } else {
          throw new Error("제출에 실패했습니다.");
        }
      } catch (error) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

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
          <Input
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div className="text-lg">설명</div>
          <Textarea
            placeholder="설명을 입력해주세요"
            className="h-40 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <Button type="button" className="text-md w-full" onClick={handleSubmit}>
        제출하기
      </Button>

      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
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
