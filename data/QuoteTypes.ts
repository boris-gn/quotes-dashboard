export interface ContactInformation {
	mobilePhone?: string;
	homePhone?: string;
	email?: string;
	address?: string;
}

export interface PolicyInformation {
	policyType?: string;
	policyDescription?: string;
	coverageAmount?: string;
	deductible?: string;
}

export interface CustomerHistory {
	policyId?: string;
	type?: string;
	status?: string;
}

export interface Discount {
	type: string;
	amount: string;
}

export interface Discount {
	type: string;
	amount: string;
}

export interface QuoteBreakdown {
	premiumAmount: string;
	annualPremium: string;
	discounts: Discount[];
	totalCharges: string;
	tax: string;
	finalPremium: string;
}

export interface ExpirationDates {
	effectiveDate: string;
	expirationDate: string;
}

export interface ActivityLog {
	date: string;
	description: string;
}

export interface SupportingDocuments {
	terms: string;
	proof: string;
	reg: string;
}

export interface PersonalDetails {
	customerId: string;
	fullName: string;
	photo?: string;
	gender: string;
	occupation: string;
	contactInformation: ContactInformation;
}

export type InsuranceType =
	| 'Life'
	| 'Business'
	| 'House'
	| 'Travel'
	| 'Vehicle';

export interface IQuotesData {
	quoteId: InsuranceType;
	type: string;
	personalDetails: {
		customerId: string;
		fullName: string;
		gender: string;
		occupation: string;
		contactInformation: ContactInformation;
	};
	policyInformation: PolicyInformation;
	customerHistory: CustomerHistory[];
	quoteStatus: string;
	quoteBreakdown: QuoteBreakdown;
	expirationDates: ExpirationDates;
	supportingDocuments: SupportingDocuments[];
	activityLog: ActivityLog[];
}

export interface IQuotesList {
	quotes: IQuotesData[];
}
