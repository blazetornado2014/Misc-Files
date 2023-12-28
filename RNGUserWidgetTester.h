// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "UExampleUserWidget.generated.h"

/**
 * 
 */
UCLASS()
class MYPROJECT_API UUExampleUserWidget : public UUserWidget
{
	GENERATED_BODY()
protected:
	void GenerateRandom();

	UPROPERTY(meta = (BindWidget) )
		class UTextBlock* randomNumberLabel;

	UPROPERTY(meta = (BindWidget))
		class UButton* generateButton;

	UFUNCTION()
		void OnGenerateButtonClicked();
	void NativeConstruct() override;
};
