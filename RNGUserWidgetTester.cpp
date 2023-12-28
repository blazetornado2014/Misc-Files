// Fill out your copyright notice in the Description page of Project Settings.


#include "UExampleUserWidget.h"
#include <Components/button.h>
#include <Components/TextBlock.h>

void UUExampleUserWidget::NativeConstruct()
{
	Super::NativeConstruct();

	GenerateRandom();

	generateButton->OnClicked.AddUniqueDynamic(this, &UUExampleUserWidget::OnGenerateButtonClicked);
}

void UUExampleUserWidget::GenerateRandom() {
	int32 randNumber = FMath::RandRange(0, 999);

	randomNumberLabel->SetText( FText::AsNumber(randNumber) );
}

void UUExampleUserWidget::OnGenerateButtonClicked() {
	GenerateRandom();
}